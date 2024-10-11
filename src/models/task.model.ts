
import mongoose, {Schema} from "mongoose";

export interface Task  {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const TaskSchema = new Schema<Task>({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  }, {
    timestamps: true, 
  });

  const TaskModel = mongoose.model<Task>('Task', TaskSchema);

export default TaskModel;