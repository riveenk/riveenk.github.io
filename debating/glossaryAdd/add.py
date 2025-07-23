import os

script_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(script_dir, "output.txt")

while True:
    term = input("Enter the term: ")
    desc = input("Enter the description: ")

    with open(file_path, "a", encoding="utf-8") as file:
        file.write(f"""<li class="glossary-item" id="term-html">
                    <span class="term">{term}</span>
                    <div class="definition">{desc}</div>
                </li>\n""")

    print(f"Text appended to {file_path}")
