import os
import json
import sys

# Ensure UTF-8 output on Windows
sys.stdout.reconfigure(encoding='utf-8')

# Paths
script_dir = os.path.dirname(os.path.abspath(__file__))
project_dir = os.path.dirname(script_dir)
config_path = os.path.join(project_dir, ".antigravity", "config.json")

if not os.path.exists(config_path):
    print("❌ Error: Antigravity config file not found inside the project.")
    sys.exit(1)

with open(config_path, "r") as f:
    config = json.load(f)

convo_id = config.get("conversationId")
task_id = config.get("taskId")
schedule = config.get("schedule")
model = config.get("model")

# Task log path
gemini_home = os.path.join(os.environ["USERPROFILE"], ".gemini")
log_path = os.path.join(gemini_home, "antigravity", "brain", convo_id, ".system_generated", "tasks", f"{task_id}.log")

print("=" * 60)
print("             ANTIGRAVITY CRONJOB DASHBOARD")
print("=" * 60)
print(f" Proyek          : loading-icon")
schedule_desc = "Setiap 1 jam" if schedule == "0 * * * *" else ("Sekali sehari jam 12:00" if schedule == "0 12 * * *" else "Kustom")
print(f" Jadwal (Cron)   : {schedule} ({schedule_desc})")
print(f" Model AI        : {model}")
print(f" ID Percakapan   : {convo_id}")
print(f" ID Task Cron    : {task_id}")
print(f" Lokasi Log      : {log_path}")
print("-" * 60)

if os.path.exists(log_path):
    print("🟢 STATUS: AKTIF (Running in Background)")
    print("-" * 60)
    print("Terakhir terpicu / log aktivitas terbaru (20 baris terakhir):")
    print("-" * 60)
    with open(log_path, "r", encoding="utf-8", errors="ignore") as lf:
        lines = lf.readlines()
        for line in lines[-20:]:
            print(line.strip())
else:
    print("🔴 STATUS: TIDAK DITEMUKAN / NON-AKTIF")
    print("Kemungkinan cronjob belum berjalan or log belum terbentuk.")

print("=" * 60)
