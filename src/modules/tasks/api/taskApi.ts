import { BaseApi } from "@/api/baseApi";
import { CLIENT_TASK_ENDPOINT } from "@/common/constant";
import { IDataResponse } from "@/types/query";
import { ITask, TTaskQuery } from "@/types/task";

class TaskApi extends BaseApi {
  async getAllTasks(params: TTaskQuery): Promise<IDataResponse<ITask[]>> {
    console.log(CLIENT_TASK_ENDPOINT, '==> CLIENT_TASK_ENDPOINT');
    const url = `${CLIENT_TASK_ENDPOINT}?userRole=${params.userRole}`;
    const { data } = await this.get<ITask[]>(url);
    return data;
  }

  async getTaskById(id: number): Promise<IDataResponse<ITask[]>> {
    const { data } = await this.get<ITask[]>(`${CLIENT_TASK_ENDPOINT}/${id}`);
    return data;
  }

  async createTask(task: any): Promise<IDataResponse<ITask[]>> {
    const { data } = await this.post<ITask[]>(`${CLIENT_TASK_ENDPOINT}`, task);
    return data;
  }

  async updateTask(id: number, task: any): Promise<IDataResponse<ITask[]>> {  
    const { data } = await this.put<ITask[]>(`${CLIENT_TASK_ENDPOINT}/${id}`, task);
    return data;
  }

  async deleteTask(id: number): Promise<IDataResponse<ITask[]>> {
    const { data } = await this.delete<ITask[]>(`${CLIENT_TASK_ENDPOINT}/${id}`);
    return data;
  }
}

export default new TaskApi();