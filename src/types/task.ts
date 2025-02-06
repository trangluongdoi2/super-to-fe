import { UserRole } from ".";

export enum ETodoStatus {
}

export interface ITask {
  title: string
  note?: string
  status: string
  updatedAt?: string
  createdAt?: string
}

export type TTaskQuery = {
  userRole: UserRole
}

export enum ETaskStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  HOLD = 'hold',
}
