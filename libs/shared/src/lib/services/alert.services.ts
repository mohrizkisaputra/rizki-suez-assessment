import { Injectable } from '@angular/core';
import { AlertStatus, MonitoringAlert } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringRulesService {

  getAirIntakeTemperature( temperature: number ): AlertStatus {
    if (temperature > 38) return 'critical';
    if (temperature >= 35) return 'warning'; 
    return 'normal';
  }

  createTemperatureAlert( temperature: number ): MonitoringAlert | null {
    const status = this.getAirIntakeTemperature( temperature );
    if (status === 'normal') return null

    return {
      type: 'temperature',
      status,
      message: status === 'critical' ? `Air intake temperature is too high (${temperature}°C)` : `Air intake temperature is high (${temperature}°C)`
    };
  }

  getFrontTirePressureStatus( psi: number ): AlertStatus {
    if (psi < 24) return 'warning';
    return 'normal';
  }

  getRearTirePressureStatus( psi: number ): AlertStatus {
    if (psi < 28) return 'warning';
    return 'normal';
  }

  createTirePressureAlert( frontPsi: number, rearPsi: number ): MonitoringAlert | null {
    const frontTireStatus = this.getFrontTirePressureStatus( frontPsi );
    const rearTireStatus = this.getRearTirePressureStatus( rearPsi );
    let messages = '';
    let warningStatus: AlertStatus = 'normal';
    if (frontTireStatus !== 'normal') {
        messages = `Front tire pressure low (${frontPsi} PSI)`;
        warningStatus = 'warning';
    } else if (rearTireStatus !== 'normal') {
        messages = `Rear tire pressure low (${rearPsi} PSI)`;
        warningStatus = 'warning';
    } else if (frontTireStatus !== 'normal' && rearTireStatus !== 'normal') {
        messages = `Front and rear tire pressure low (${rearPsi} PSI)`;
        warningStatus = 'warning';
    }

    return ({
        type: 'tire-pressure',
        status: warningStatus,
        message: messages
    });
  }
}