import { Calendar, FileText, Upload } from "lucide-react";
import { useState, type FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

type NewPlanFormProps = object;

const NewPlanForm: FunctionComponent<NewPlanFormProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [examDate, setExamDate] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);

      // Avoid duplicate files based on file name
      const uniqueFiles = newFiles.filter(
        (newFile) =>
          !files.some((existingFile) => existingFile.name === newFile.name)
      );

      setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0 || !examDate) return;

    setIsUploading(true);

    setTimeout(() => {
      setIsUploading(false);
      navigate("/study-plans");
    }, 2000);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #eff6ff, #e0e7ff)",
        padding: "1rem",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            paddingTop: "2rem",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Smart Study Planner
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#4B5563" }}>
            Upload your study materials and get a personalized study plan based
            on AI analysis
          </p>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "0.5rem",
            padding: "2rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            Create Your Study Plan
          </h2>
          <p style={{ color: "#6B7280" }}>
            Upload your study materials and set your exam date to get started
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
            <label>
              Study Materials (PDF)
              <div
                style={{
                  border: "2px dashed #d1d5db",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                <input
                  id="files"
                  type="file"
                  multiple
                  accept=".pdf"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="files"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Upload size={32} color="#9CA3AF" />
                  <p style={{ color: "#6B7280" }}>
                    Click to upload PDF files or drag and drop
                  </p>
                </label>
              </div>
            </label>

            {files.length > 0 && (
              <div style={{ marginTop: "1rem" }}>
                <strong>Selected Files:</strong>
                {files.map((file, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      background: "#F9FAFB",
                      padding: "0.5rem",
                      marginTop: "0.5rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <FileText size={16} color="#DC2626" />
                      <span>{file.name}</span>
                      <small>({(file.size / 1024 / 1024).toFixed(1)} MB)</small>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#DC2626",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="examDate">Exam Date</label>
              <div style={{ position: "relative" }}>
                <Calendar
                  size={16}
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.5rem",
                    color: "#9CA3AF",
                  }}
                />
                <input
                  id="examDate"
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  style={{
                    paddingLeft: "2rem",
                    padding: "0.5rem",
                    width: "100%",
                    borderRadius: "0.25rem",
                    border: "1px solid #D1D5DB",
                  }}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={files.length === 0 || !examDate || isUploading}
              style={{
                marginTop: "1.5rem",
                width: "100%",
                background: "#4F46E5",
                color: "white",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                fontWeight: "600",
                border: "none",
                cursor: isUploading ? "not-allowed" : "pointer",
              }}
            >
              {isUploading ? "Analyzing Materials..." : "Generate Study Plan"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPlanForm;
