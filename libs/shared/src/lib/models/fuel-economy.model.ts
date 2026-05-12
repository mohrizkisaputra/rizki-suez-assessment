export interface FuelEconomyResult {
  economyKml: number;
  consumptionL100km: number;
  maxRangeKm: number;
  fuelNeededLiter: number;
  canCompleteTrip: boolean;
  fuelShortageL: number;
  pctRangeAchievable: number;
  estTravelTimeHours: number;
  factors: FuelFactors;
}

export interface FuelFactors {
  airDensityFactor: number;
  speedFactor: number;
  rpmFactor: number;
  tireFactor: number;
  loadFactor: number;
  throttleFactor: number;
  totalFactor: number;
  airDensityKgm3: number;
}

export class FuelEconomyCalculator {
  private static readonly BASE_ECONOMY_KML = 42;
  private static readonly STD_AIR_DENSITY  = 1.225;
  private static readonly BIKE_WEIGHT_KG   = 128;
  private static readonly OPT_FRONT_PSI    = 33;
  private static readonly OPT_REAR_PSI     = 36;
  private static readonly BASE_LOAD_KG     = 203

  static calculate(
    air:      { temperatureCelsius: number; humidityPct: number; pressureHpa: number },
    speed:    { speedKmh: number; rpm: number },
    throttle: { throttlePct: number },
    tire:     { frontPsi: number; rearPsi: number },
    weight:   { totalPersonKg: number; cargoKg: number },
    fuelAvailableLiter: number,
    targetDistanceKm: number
  ): FuelEconomyResult {

    const factors = this.calcFactors(air, speed, throttle, tire, weight);
    const economyKml       = this.BASE_ECONOMY_KML / factors.totalFactor;
    const consumptionL100  = 100 / economyKml;
    const maxRangeKm       = economyKml * fuelAvailableLiter;
    const fuelNeededLiter  = targetDistanceKm / economyKml;
    const canComplete      = fuelAvailableLiter >= fuelNeededLiter;
    const fuelShortage     = Math.max(0, fuelNeededLiter - fuelAvailableLiter);
    const pctRange         = Math.min(100, (maxRangeKm / targetDistanceKm) * 100);
    const estTimeHours     = targetDistanceKm / speed.speedKmh;

    return {
      economyKml:           Math.round(economyKml * 100) / 100,
      consumptionL100km:    Math.round(consumptionL100 * 100) / 100,
      maxRangeKm:           Math.round(maxRangeKm * 10) / 10,
      fuelNeededLiter:      Math.round(fuelNeededLiter * 100) / 100,
      canCompleteTrip:      canComplete,
      fuelShortageL:        Math.round(fuelShortage * 100) / 100,
      pctRangeAchievable:   Math.round(pctRange * 10) / 10,
      estTravelTimeHours:   Math.round(estTimeHours * 100) / 100,
      factors,
    };
  }

  private static calcFactors(air: any, speed: any, throttle: any, tire: any, weight: any): FuelFactors {
    const airDensity     = this.calcAirDensity(air.temperatureCelsius, air.humidityPct, air.pressureHpa);
    const airFactor      = airDensity / this.STD_AIR_DENSITY;
    const speedFactor    = this.calcSpeedFactor(speed.speedKmh);
    const rpmFactor      = this.calcRpmFactor(speed.rpm);
    const tireFactor     = this.calcTireFactor(tire.frontPsi, tire.rearPsi);
    const loadFactor     = this.calcLoadFactor(weight.totalPersonKg, weight.cargoKg);
    const throttleFactor = this.calcThrottleFactor(throttle.throttlePct);
    const totalFactor    = airFactor * speedFactor * rpmFactor * tireFactor * loadFactor * throttleFactor;

    return {
      airDensityFactor: Math.round(airFactor * 10000) / 10000,
      speedFactor:      Math.round(speedFactor * 10000) / 10000,
      rpmFactor:        Math.round(rpmFactor * 10000) / 10000,
      tireFactor:       Math.round(tireFactor * 10000) / 10000,
      loadFactor:       Math.round(loadFactor * 10000) / 10000,
      throttleFactor:   Math.round(throttleFactor * 10000) / 10000,
      totalFactor:      Math.round(totalFactor * 10000) / 10000,
      airDensityKgm3:   Math.round(airDensity * 10000) / 10000,
    };
  }

  private static calcAirDensity(temp: number, humidity: number, pressure: number): number {
    const T  = temp + 273.15;
    const Rd = 287.05, Rv = 461.5;
    const es = 6.112 * Math.exp((17.67 * temp) / (temp + 243.5));
    const e  = (humidity / 100) * es;
    const pd = (pressure - e) * 100;
    const pv = e * 100;
    return pd / (Rd * T) + pv / (Rv * T);
  }

  private static calcSpeedFactor(speedKmh: number): number {
    if (speedKmh < 30)  return 1.15;
    if (speedKmh < 60)  return 1.00;
    if (speedKmh < 80)  return 1.08;
    if (speedKmh < 100) return 1.18;
    return 1.32;
  }

  private static calcRpmFactor(rpm: number): number {
    if (rpm < 2000) return 1.25;
    if (rpm < 3000) return 1.10;
    if (rpm < 6000) return 1.00;
    if (rpm < 8000) return 1.12;
    return 1.30;
  }

  private static calcTireFactor(frontPsi: number, rearPsi: number): number {
    const fDev = Math.abs(frontPsi - this.OPT_FRONT_PSI);
    const rDev = Math.abs(rearPsi  - this.OPT_REAR_PSI);
    return 1 + fDev * 0.008 + rDev * 0.006;
  }

  private static calcLoadFactor(totalPersonKg: number, cargoKg: number): number {
    const total = totalPersonKg + cargoKg + this.BIKE_WEIGHT_KG;
    return 1 + Math.max(0, (total - this.BASE_LOAD_KG) * 0.003);
  }

  private static calcThrottleFactor(throttlePct: number): number {
    return 1 + (throttlePct / 100) * 0.8;
  }
}