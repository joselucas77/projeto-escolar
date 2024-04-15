export interface Toast {
  id: number;
  show: boolean;
  description: string;
  removing?: boolean;
  timeoutId?: NodeJS.Timeout | null;
}
