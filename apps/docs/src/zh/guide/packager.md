---
title: Packager
description: Anki 卡组打包工具
---

# Packager

Packager 是一个用于将 Anki 模板源码打包为 `.apkg` 文件的命令行工具。

## 安装和使用

使用 npx 直接运行（推荐）：

```bash
npx @anki-eco/packager [选项]
```

## 命令行选项

- `-i, --input <目录>`：输入目录，包含 build.json、front.html、back.html 文件（默认为当前目录）
- `-o, --output <目录>`：输出目录，生成的 .apkg 文件将保存在此处（默认为当前目录）
- `--multiple`：处理输入目录下的多个子目录，每个子目录包含一个卡组

## 目录结构要求

### 单个卡组

对于单个卡组，您的目录结构应该如下：

```
your-deck/
├── build.json      # 卡组配置文件
├── front.html      # 卡片正面模板
└── back.html       # 卡片背面模板
```

### 多个卡组

当使用 `--multiple` 选项时，目录结构应该如下：

```
dist/
├── deck1/
│   ├── build.json
│   ├── front.html
│   └── back.html
├── deck2/
│   ├── build.json
│   ├── front.html
│   └── back.html
└── ...
```

## build.json 文件格式

`build.json` 文件是必需的配置文件，包含以下字段：

```json
{
  "note_type_name": "笔记类型名称",
  "deck_name": "卡组名称",
  "note_type_id": 1234567890,
  "deck_id": 9876543210,
  "fields": ["字段1", "字段2"],
  "notes": [
    {
      "fields": {
        "字段1": "内容1",
        "字段2": "内容2"
      }
    }
  ]
}
```

### 字段说明

- `note_type_name`：笔记类型的显示名称
- `deck_name`：卡组的显示名称（也会用作输出文件名）
- `note_type_id`：笔记类型的唯一标识符（数字）
- `deck_id`：卡组的唯一标识符（数字）
- `fields`：字段名称列表，定义了笔记的字段结构
- `notes`：笔记数组，每个笔记包含对应字段的内容

## HTML 模板文件

- `front.html`：卡片正面的 HTML 模板
- `back.html`：卡片背面的 HTML 模板

这些模板可以使用 Anki 的字段语法（如 `{{字段名}}`）来引用 build.json 中定义的字段。

## 使用示例

### 打包单个卡组

```bash
# 从当前目录打包，输出到当前目录
npx @anki-eco/packager

# 指定输入和输出目录
npx @anki-eco/packager -i ./my-deck -o ./output
```

### 打包多个卡组

```bash
# 处理 dist 目录下的所有子目录
npx @anki-eco/packager -i ./dist -o ./release --multiple
```

成功执行后，工具会在输出目录中生成对应的 `.apkg` 文件，文件名为卡组名称。
