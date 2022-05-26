from bs4 import BeautifulSoup
import requests

url = "https://www.memoryexpress.com/Products/MX00118518"

result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")
# print(doc.prettify)

prices = doc.find_all(text="$")
print(prices)

# parent = prices[0].parent
# strong = parent.find("strong")
# print(strong.string)
