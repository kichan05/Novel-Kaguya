import glob
import random
import os

img_list = glob.glob("*.jpg")

random.shuffle(img_list)

for n, i in enumerate(img_list):
  os.rename(i, f"novel_cover_{n}.jpg")