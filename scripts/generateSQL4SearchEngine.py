import os
import json

filepath = "../src/components/blogContent/blogCategories.js"

with open(filepath) as f:
    file_content = f.read()

    file_content = file_content.replace("const blogContent = ","")
    file_content = file_content.replace("export default blogContent;","")

    json_file_content =  json.loads(file_content)


    for x in range(0,len(json_file_content)):

    	category_content = json_file_content[x]

    	category_titles = category_content["title"]


    	articles = category_content["articles"]

    	for art in articles:
    	
    		art_title = art["title"]

    		print(art_title)
    		print(type(art_title))

    		if isinstance(my_variable, str):



    	print("------------------------------------")

