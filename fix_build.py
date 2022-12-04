index_path = "/home/pedro/Desktop/darealesteves/dist/index.html"

print("Fixing " + index_path)

content = None
with open(index_path, "r") as f:
    content = f.read() 
    content = content.replace('src="','src=".') 
    content = content.replace('href="','href=".')
    f.close()

print(content)

f = open(index_path, "w")
f.write(content)
f.close()