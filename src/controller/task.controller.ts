import express, { Request, Response } from "express";
import TaskModel from "../models/task.model";

export const Createtask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      throw new Error("Title and description are required. ");
    }
    const task = new TaskModel({
      title,
      description,
    });

    await task.save();

    res.status(200).json({
      success:true,
      message: "task Created Successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      statusCode: 400,
      message: (error as Error).message,
    });
  }
};

export const GetTask = async (req: Request, res: Response): Promise<void> => {
  try {

    const tasks = await TaskModel.find()
    if (!tasks) {
        throw new Error("Task not found")
    }
    res.status(200).json({
        tasks,
        success:true,
        status_code: 200 
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      statusCode: 400,
      message: (error as Error).message,
    });
  }
}

export const UpdateTask = async (req: Request,res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const task = await TaskModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!task) {
        throw new Error("Task not found.");
    }
    res.status(200).json({
      status_code: 200,
      message: "task Updated Successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      statusCode: 400,
      message: (error as Error).message,
    });
  }
};
   

export const DeleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const task = await TaskModel.findByIdAndDelete(id);

      if (!task) {
        throw new Error("Task not found.");
      }

      res.status(200).json({
        status_code: 200,
        message: "task Deleted Successfully.",
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        statusCode: 400,
        message: (error as Error).message,
      });
    }
}

