export type AlertStatus = | 'normal' | 'warning' | 'critical';

export interface MonitoringAlert {
  type: string;
  status: AlertStatus;
  message: string;
}