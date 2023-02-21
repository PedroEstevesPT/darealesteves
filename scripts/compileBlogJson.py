import os
import json

directory= "../src/components/blogContent/"

# List to store blogContent dictionaries from all files
blog_content_list = []

# Iterate over files in directory
for filename in ["tech.js","music.js","cinema.js","books.js","museums.js","gastronomy.js","photography.js"]:
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
 #   f.write(";")