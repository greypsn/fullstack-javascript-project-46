# Difference Generator

### Hexlet tests and linter status:
[![Actions Status](https://github.com/greypsn/fullstack-javascript-project-46/workflows/hexlet-check/badge.svg)](https://github.com/greypsn/fullstack-javascript-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/4ba516b910007719a0bf/maintainability)](https://codeclimate.com/github/greypsn/fullstack-javascript-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4ba516b910007719a0bf/test_coverage)](https://codeclimate.com/github/greypsn/fullstack-javascript-project-46/test_coverage)

## Поиск различий между файлами

Учебный проект по созданию консольной утилиты, которая находит различия между сравниваемыми файлами.

1. Склонируйте репозиторий
   ```
   $ git clone git@github.com:greypsn/fullstack-javascript-project-46.git
   ```
2. Для установки введите
   ```
   $ make install
   ```

### Для запуска тестов введите

```
$ make test
$ make test-coverage
```

### Использование

```
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version        output the version number
  -f, --format [type]  render format: stylish / plain / json (default: "stylish")
  -h, --help           render usage information
```

### Демонстрация работы

#### Вызов справки по утилите gendiff

[![asciicast](https://asciinema.org/a/6h4PtCeCx8z3YKx8FZcOvxR6k.svg)](https://asciinema.org/a/6h4PtCeCx8z3YKx8FZcOvxR6k)

#### JSON

[![asciicast](https://asciinema.org/a/H22mZNZO4m7c3yGAXNH5KU9ai.svg)](https://asciinema.org/a/H22mZNZO4m7c3yGAXNH5KU9ai)

#### YAML

[![asciicast](https://asciinema.org/a/Tm0eg3v4AfSTuTxzTMnua7qxQ.svg)](https://asciinema.org/a/Tm0eg3v4AfSTuTxzTMnua7qxQ)

#### JSON или YAML со вложенными элементами (по умолчанию --format stylish)

[![asciicast](https://asciinema.org/a/QeRylApzNIGt844gOcS1LoTYA.svg)](https://asciinema.org/a/QeRylApzNIGt844gOcS1LoTYA)

#### JSON или YAML со вложенными элементами (--format plain)

[![asciicast](https://asciinema.org/a/fSfdg6LG6c17XUIrFcQS0kl4p.svg)](https://asciinema.org/a/fSfdg6LG6c17XUIrFcQS0kl4p)

#### JSON или YAML со вложенными элементами (--format json)

[![asciicast](https://asciinema.org/a/RwxWc8AymgJ4VDTpB39ozEBfO.svg)](https://asciinema.org/a/RwxWc8AymgJ4VDTpB39ozEBfO)
