import { Context } from "@netlify/functions";

const someLongRunningTask = async ():Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};

export default async (req: Request, context: Context) => {
  await someLongRunningTask();
  
  console.log("Done");
};