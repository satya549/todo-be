
import mongoose, {Schema} from "mongoose";

export interface Task  {
    title: string;
    description: string;
    priority: string;
    dueDate: Date;
  }

  const TaskSchema = new Schema<Task>(
    {
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
      priority: {
        type: String,
        required: true,
        enum: ["High", "Middle", "Low"],
      },
      dueDate: { type: Date, required: true },
    },
    {
      timestamps: true,
    }
  );

  const TaskModel = mongoose.model<Task>('Task', TaskSchema);

export default TaskModel;