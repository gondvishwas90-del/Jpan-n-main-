import cv2
import os

video_path = r"c:\jpan-web-main N\scratch\video.mp4"
output_dir = r"c:\jpan-web-main N\scratch\frames"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps
print(f"FPS: {fps}, Total Frames: {total_frames}, Duration: {duration:.2f}s")

# Extract at specific seconds
timestamps = [0.0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 3.0, 3.5, 4.0, 4.5, 5.0]

for t in timestamps:
    frame_no = int(t * fps)
    if frame_no < total_frames:
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_no)
        ret, frame = cap.read()
        if ret:
            out_file = os.path.join(output_dir, f"frame_{t:04.1f}s.jpg")
            cv2.imwrite(out_file, frame)
            print(f"Saved {out_file}")

cap.release()
print("Done extracting frames!")
