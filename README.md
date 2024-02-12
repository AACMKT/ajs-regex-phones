# Nicknames validation via regex
---
[![Build status](https://ci.appveyor.com/api/projects/status/xhkayb68ne19xmh4?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-regex-phones)

### Описание

Реализована функция преобразования телефонных номеров к единому формату посредством функционала str.replace и regexp.

Минимальные требования к распознаванию форматов записи - как показано ниже:

* 8 (927) 000-00-00 -> +79270000000
* +7 960 000 00 00 -> +79600000000
* +86 000 000 0000 -> +860000000000

---

Обеспечено покрытие тестами.
