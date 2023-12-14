import { TodoistApi } from "@doist/todoist-api-typescript";
import dayjs from "dayjs";
import * as moment from "moment-timezone";
import { create } from "zustand";

const api = new TodoistApi(`${process.env.TOKEN}`);

type Due = {
  date: string;
};

type ToDo = {
  id: string;
  addedAt: string;
  content: string;
  description: string;
  dueDate: string;
  isComplete: boolean;
  remainingTime: string;
};

type ToDoState = {
  todo: ToDo[];
};

type ToDoAction = {
  getAllToDo: () => Promise<void>;
};

const useToDoStore = create<ToDoState & ToDoAction>()((set) => ({
  todo: [],

  getAllToDo: async () => {
    try {
      const response = await api.getTasks();

      const data = response.map((taskItem) => {
        return {
          id: taskItem.id,
          addedAt: dayjs(taskItem.createdAt).format("DD-MM-YYYY"),
          content: taskItem.content,
          description:
            taskItem.description === ""
              ? "No Description"
              : taskItem.description,
          dueDate: taskItem.due && taskItem.due.date ? taskItem.due.date : "",
          isComplete: taskItem.isCompleted,
          remainingTime: taskItem.due
            ? dayjs(taskItem.due.date).diff(dayjs(), "days")
            : "",
        };
      });

      set({
        todo: data.map((item) => ({
          ...item,
          remainingTime: String(item.remainingTime),
        })),
      });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useToDoStore;
