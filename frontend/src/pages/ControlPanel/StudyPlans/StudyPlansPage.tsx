import { Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import {
  Calendar,
  Filter,
  MoreHorizontal,
  Search,
  Target,
  BookOpen,
} from "lucide-react";
import { mockStudyPlans } from ".";
import { Link, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function StudyPlansPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [studyPlans, setStudyPlans] = useState(mockStudyPlans);
  const navigate = useNavigate();

  const handleDeletePlan = (id: number) => {
    // In a real app, this would call your Laravel API
    setStudyPlans(studyPlans.filter((plan) => plan.id !== id));
  };

  const filteredPlans = studyPlans.filter((plan) =>
    plan.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPlans = [...filteredPlans].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.examDate).getTime() - new Date(b.examDate).getTime();
    } else if (sortBy === "progress") {
      return b.progress - a.progress;
    } else if (sortBy === "created") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  const getDaysUntilExam = (examDate: string) => {
    const today = new Date();
    const exam = new Date(examDate);
    const diffTime = exam.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            My Study Plans
          </h1>
          <Link to="/study-plans/new">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create New Plan
            </Button>
          </Link>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search plans..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Exam Date (Closest)</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="created">Recently Created</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Empty state */}
        {sortedPlans.length === 0 && (
          <Card className="text-center p-12">
            <CardContent className="pt-6">
              <BookOpen className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No study plans found</h3>
              <p className="text-gray-500 mb-6">
                Create your first study plan to get started
              </p>
              <Link to="/">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Plan
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Study Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPlans.map((plan) => {
            const daysUntilExam = getDaysUntilExam(plan.examDate);
            const isUrgent = daysUntilExam <= 7;

            return (
              <Card
                key={plan.id}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className={`h-2 ${isUrgent ? "bg-red-500" : "bg-blue-500"}`}
                ></div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                        {plan.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <span>
                          Exam: {new Date(plan.examDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => navigate(`/study-plans/${plan.id}`)}
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeletePlan(plan.id)}
                          className="text-red-600"
                        >
                          Delete Plan
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{plan.progress}%</span>
                    </div>
                    <Progress value={plan.progress} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {plan.subjects.map((subject, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 text-gray-500 mr-2" />
                      <span
                        className={isUrgent ? "text-red-600 font-medium" : ""}
                      >
                        {daysUntilExam} days left
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{plan.totalHours} hours</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => navigate(`/study-plans/${plan.id}`)}
                  >
                    View Plan
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
