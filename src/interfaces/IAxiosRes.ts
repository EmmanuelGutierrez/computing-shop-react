import { AxiosResponse } from "axios";

interface responseData<param> {
  error: boolean;
  status: number;
  data?: param[];
  message?: string;
}

export interface AxiosRes<param> extends AxiosResponse {
  data: responseData<param>;
}
