"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  BookOpen,
  CheckCircle,
  Target,
  ArrowLeft,
  Link,
} from "lucide-react";
import { mockStudyPlan } from ".";
import { Checkbox } from "@/components/ui/checkbox";

export default function StudyPlanDetails() {
  const [studyPlan] = useState(mockStudyPlan);
  const [completedTopics, setCompletedTopics] = useState<number[]>([1, 2, 3]);

  const toggleTopicCompletion = (topicId: number) => {
    setCompletedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const totalTopics = studyPlan.dailyPlan.reduce(
    (acc, day) => acc + day.topics.length,
    0
  );
  const completedCount = completedTopics.length;
  const progressPercentage = (completedCount / totalTopics) * 100;

  const getSubjectColor = (subject: string) => {
    const subjectData = studyPlan.subjects.find((s) => s.name === subject);
    return subjectData?.color || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link to="/study-plans">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Upload
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              Your Study Plan
            </h1>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            Exam: {new Date(studyPlan.examDate).toLocaleDateString()}
          </Badge>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Study Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold">
                  {studyPlan.totalStudyTime}h
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Days Until Exam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-red-600" />
                <span className="text-2xl font-bold">
                  {studyPlan.daysUntilExam}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Daily Average
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <span className="text-2xl font-bold">
                  {studyPlan.estimatedDailyTime}h
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="text-2xl font-bold">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Progress Overview */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
                <CardDescription>
                  {completedCount} of {totalTopics} topics completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="mb-4" />
                <div className="space-y-3">
                  {studyPlan.subjects.map((subject) => {
                    const subjectTopics = studyPlan.dailyPlan
                      .flatMap((day) => day.topics)
                      .filter((topic) => topic.subject === subject.name);
                    const subjectCompleted = subjectTopics.filter((topic) =>
                      completedTopics.includes(topic.id)
                    ).length;
                    const subjectProgress =
                      (subjectCompleted / subjectTopics.length) * 100;

                    return (
                      <div key={subject.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{subject.name}</span>
                          <span>
                            {subjectCompleted}/{subjectTopics.length}
                          </span>
                        </div>
                        <Progress value={subjectProgress} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studyPlan.subjects.map((subject) => (
                    <div
                      key={subject.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded ${subject.color}`}
                        ></div>
                        <span className="font-medium">{subject.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {subject.estimatedHours}h
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Daily Study Plan */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Study Schedule</CardTitle>
                <CardDescription>
                  Check off topics as you complete them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {studyPlan.dailyPlan.map((day) => (
                    <div key={day.date} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">{day.day}</h3>
                        <span className="text-sm text-gray-600">
                          {new Date(day.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {day.topics.map((topic) => (
                          <div
                            key={topic.id}
                            className="flex items-center space-x-3 p-3 bg-white rounded"
                          >
                            <Checkbox
                              className="border-gray-900 rounded-md"
                              checked={completedTopics.includes(topic.id)}
                              onCheckedChange={() =>
                                toggleTopicCompletion(topic.id)
                              }
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <div
                                  className={`w-3 h-3 rounded ${getSubjectColor(
                                    topic.subject
                                  )}`}
                                ></div>
                                <span className="font-medium">
                                  {topic.subject}
                                </span>
                              </div>
                              <p
                                className={`text-sm ${
                                  completedTopics.includes(topic.id)
                                    ? "line-through text-gray-500"
                                    : "text-gray-700"
                                }`}
                              >
                                {topic.topic}
                              </p>
                            </div>
                            <Badge variant="secondary">{topic.duration}h</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
