import re
import json

# Input text file ka naam (isme wo saare questions copy-paste kar dena)
input_filename = "deloitte_questions.txt" 

questions = []

# Regex patterns to find Question, Options, and Answer
q_pattern = re.compile(r"Q(\d+)\.\s+(.*)")
opt_pattern = re.compile(r"([A-D])\)\s+(.*)")
ans_pattern = re.compile(r"\[ANS\]:\s+([A-D])")

current_q = {}

try:
    with open(input_filename, "r", encoding="utf-8") as file:
        lines = file.readlines()
        
        for line in lines:
            line = line.strip()
            if not line: continue

            # Match Question
            q_match = q_pattern.match(line)
            if q_match:
                if current_q: # Save previous question
                    questions.append(current_q)
                current_q = {
                    "n": int(q_match.group(1)),
                    "q": q_match.group(2)
                }
                continue

            # Match Options
            opt_match = opt_pattern.match(line)
            if opt_match and current_q:
                key = opt_match.group(1).lower()
                val = opt_match.group(2)
                current_q[key] = val
                continue

            # Match Answer
            ans_match = ans_pattern.match(line)
            if ans_match and current_q:
                current_q["ans"] = ans_match.group(1).lower()

        # Append last question
        if current_q:
            questions.append(current_q)

    # Output print karna (Ise copy karke HTML me dalna)
    json_output = json.dumps(questions, indent=4)
    print("Conversion Complete! Total Questions:", len(questions))
    
    # Save to a file
    with open("questions_data.js", "w", encoding="utf-8") as f:
        f.write("const questionsData = " + json_output + ";")
        print("File saved as 'questions_data.js'. Copy contents to your HTML file.")

except FileNotFoundError:
    print("Error: 'deloitte_questions.txt' file nahi mili. Please file create karein.")