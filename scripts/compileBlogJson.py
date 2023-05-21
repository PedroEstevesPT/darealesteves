import os
import json

directory= "../src/components/blogContent/"

#################################################
#         CREATES BLOG CATEGORIES               #
#     TO BE USED IN SEARCH ON THE SITE (.SQL)   #
#################################################

# List to store blogContent dictionaries from all files
blog_content_list = []

# Iterate over files in directory
for filename in ["tech.js","music.js","finances.js","fitness.js","cinema.js","books.js","museums.js","gastronomy.js","photography.js"]:
    if filename.endswith(".js"):
        filepath = os.path.join(directory, filename)
        with open(filepath) as f:
            file_contents = f.read()

        # Extract blogContent dictionary from file
        try:
            start_index = file_contents.index("{")
            end_index = file_contents.rindex("}") + 1
            blog_content = json.loads(file_contents[start_index:end_index])
            print("Parsed " + filename + " with success")
        except ValueError as e:
            print(f"Error: could not extract blogContent from file {filename}: {e}")
            continue

        # Add blogContent dictionary to list
        blog_content_list.append(blog_content)

# Write new file containing list of blogContent dictionaries
output_filepath = "../src/components/blogContent/blogCategories.js"
with open(output_filepath, "w") as f:
    f.write("const blogContent = ")
    f.write(json.dumps(blog_content_list, ensure_ascii=False,indent=4))
    f.write("\n export default blogContent;")

##################################
#      CREATES .SQL FILE         #               
#          FOR SEARCH            #
##################################
print("------------------------")
sql_result = []

for filename in ["tech.js","music.js","finances.js","fitness.js","cinema.js","books.js","museums.js","gastronomy.js","photography.js"]:
    if filename.endswith(".js"):
        filepath = os.path.join(directory, filename)
        with open(filepath) as f:
            file_contents = f.read()

            # Extract blogContent dictionary from file
            try:
                start_index  = file_contents.index("{")
                end_index    = file_contents.rindex("}") + 1
                blog_content = json.loads(file_contents[start_index:end_index])

                category_en = 'NULL' 
                category_pt = 'NULL'
                content_en = 'NULL'
                content_pt = 'NULL'

                for article in blog_content["articles"]:
                    title_en = 'NULL' 
                    title_pt = 'NULL'
                    path = None

                    if "title" in list(article.keys()):
                        titles = article["title"]

                        #caso por exemplo dos links da musica
                        if isinstance(titles,str):
                            title_en = "'{}'".format(titles)
                            title_pt = "'{}'".format(titles)
                            path = "'{}'".format(blog_content["blogcategory"])
                            category_en = "'{}'".format(blog_content["title"]["en"])
                            category_pt = "'{}'".format(blog_content["title"]["pt"])


                        if isinstance(titles,str) == False and "en" in list(titles.keys()):
                            title_en = "'{}'".format(titles["en"])
                            category_en = "'{}'".format(blog_content["title"]["en"])
                            path = "'{}'".format(article["path"])

                        if isinstance(titles,str) == False and "pt" in list(titles.keys()):
                            title_pt = "'{}'".format(titles["pt"])
                            category_pt = "'{}'".format(blog_content["title"]["pt"])
                            path = "'{}'".format(article["path"])

                        for emoji in ["🐋","👨‍💻","🎥","📚","🖼️","🇫🇷","🎸"]:
                            title_pt = title_pt.strip().replace(emoji,"")
                            title_en = title_en.strip().replace(emoji,"")
                            category_en = category_en.strip().replace(emoji,"")
                            category_pt = category_pt.strip().replace(emoji,"")

                            path = path.strip().replace(emoji,"")
                        
                        query = "INSERT INTO blog_posts(title_pt,title_en,category_pt,category_en,content_pt,content_en,endpoint) \
                        VALUES ({},{},{},{},{},{},{})".format(title_pt,title_en,category_pt,category_en,content_pt,content_en,path)
                        
                        sql_result.append(query)
            except Exception as e:
                print(e)

output_filepath = "../scripts/sql_categories.sql"
with open(output_filepath, "w") as f:
    for q in sql_result:
        f.write(q)
        f.write('\n')
print("Generated Categories .sql file with success on directory {}.".format(output_filepath))


 