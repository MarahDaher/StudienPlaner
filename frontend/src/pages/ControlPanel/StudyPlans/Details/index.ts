export const mockStudyPlan = {
  examDate: "2024-02-15",
  totalStudyTime: 45, // hours
  estimatedDailyTime: 3, // hours
  daysUntilExam: 15,
  subjects: [
    { name: "Mathematics", estimatedHours: 15, color: "bg-blue-500" },
    { name: "Physics", estimatedHours: 18, color: "bg-green-500" },
    { name: "Chemistry", estimatedHours: 12, color: "bg-purple-500" },
  ],
  dailyPlan: [
    {
      date: "2024-02-01",
      day: "Day 1",
      topics: [
        {
          id: 1,
          subject: "Mathematics",
          topic: "Calculus Fundamentals",
          duration: 2,
          completed: true,
        },
        {
          id: 2,
          subject: "Physics",
          topic: "Newton's Laws",
          duration: 1,
          completed: true,
        },
      ],
    },
    {
      date: "2024-02-02",
      day: "Day 2",
      topics: [
        {
          id: 3,
          subject: "Chemistry",
          topic: "Atomic Structure",
          duration: 2,
          completed: true,
        },
        {
          id: 4,
          subject: "Mathematics",
          topic: "Integration Techniques",
          duration: 1,
          completed: false,
        },
      ],
    },
    {
      date: "2024-02-03",
      day: "Day 3",
      topics: [
        {
          id: 5,
          subject: "Physics",
          topic: "Energy and Work",
          duration: 2,
          completed: false,
        },
        {
          id: 6,
          subject: "Chemistry",
          topic: "Chemical Bonding",
          duration: 1,
          completed: false,
        },
      ],
    },
    {
      date: "2024-02-04",
      day: "Day 4",
      topics: [
        {
          id: 7,
          subject: "Mathematics",
          topic: "Differential Equations",
          duration: 2,
          completed: false,
        },
        {
          id: 8,
          subject: "Physics",
          topic: "Thermodynamics",
          duration: 1,
          completed: false,
        },
      ],
    },
    {
      date: "2024-02-05",
      day: "Day 5",
      topics: [
        {
          id: 9,
          subject: "Chemistry",
          topic: "Organic Chemistry Basics",
          duration: 2,
          completed: false,
        },
        {
          id: 10,
          subject: "Mathematics",
          topic: "Statistics and Probability",
          duration: 1,
          completed: false,
        },
      ],
    },
  ],
};
