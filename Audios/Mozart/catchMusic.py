# -*- coding: utf-8 -*-
"""
Created on Tue Oct 25 08:06:05 2022

@author: User
"""

from pytube import YouTube
import os
about = open("about.txt",'w')
option = open("option.txt",'w')
index = 1
with open("Mozart.txt",'r') as f:
    for url in f:
        target_path = "."
        yt = YouTube(url)
        video = yt.streams.filter(only_audio=True).first()
        out_file = video.download(output_path=target_path)
        base, ext = os.path.splitext(out_file)
        new_file = base + '.mp3'
        os.rename(out_file, new_file)
        print("target path = " + (new_file))
        print("mp3 has been successfully downloaded.")
        base = base.split("\\")[-1]
        about.write("<li><a href='" + url + "'>" + base + "</a></li>\n")
        option.write("<option id='select" + str(index) + "' value='" + base + ".mp3'>" + base + "</option>\n")
        index += 1
about.close()
option.close()