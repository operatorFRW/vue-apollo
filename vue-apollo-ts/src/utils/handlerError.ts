import { ApolloError } from "@apollo/client";
import { ElMessage } from "element-plus";

export default function handlerError(error: ApolloError | null): void {
  if (!error) return;
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach((error) => {
      switch (error.extensions?.code) {
        case "INTERNAL_SERVER_ERROR":
          ElMessage.error("Ошибка сервера");
      }
    });
  }
}
