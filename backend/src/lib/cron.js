import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
    https
        .get(process.env.API_URL, (res) => {
            if (res.statusCode === 200) console.log("GET request send successfully");
            else console.log("GET request failed", res.statusCode);
        })
        .on("error", (e) => console.error("Error while sending request", e));
});

export default job;

// CRON JOB EXPLANATION:
// Cron jobs are scheduled tasks that run at specific intervals.
// we want to send 1 GET request every 14 minutes

// How to define a "Schedule"?
// You define a schedule using a cron expression, which consists of 5 fields representing:

//! MINUTE, HOUR, DAY OF MONTH, MONTH, DAY OF WEEK

//? EXAMPLE && EXPLANATION:
//* 14 * * * * - Every 14 minutes
//* 0 0 * * 0 - Every Sunday at midnight
//* 30 3 15 * * - Every 15th of the month at 3:30 AM
//* 0 0 1 1 * - Every January 1st at midnight
//* 0 * * * * - Every hour