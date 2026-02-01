import cv2
import os

video_path = "video.mp4"      # path to your video
output_dir = "frames"               # folder to save frames
total_frames_to_save = 120

os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)

total_video_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
step = max(total_video_frames // total_frames_to_save, 1)

saved = 0
frame_index = 0

while cap.isOpened() and saved < total_frames_to_save:
    ret, frame = cap.read()
    if not ret:
        break

    if frame_index % step == 0:
        filename = f"frame_{saved:03d}.png"
        cv2.imwrite(os.path.join(output_dir, filename), frame)
        saved += 1

    frame_index += 1

cap.release()
print("✅ Video converted into 120 PNG frames successfully")
