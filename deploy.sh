#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 编译文档
vuepress build docs
# npm run docs:build

# 编译项目
npm run build

# 提交仓库
git add -A
git commit -m 'deploy'

# 提交码云
git push -f git@gitee.com:watasi/infozx_api.git master

# 提交github
git push -f git@github.com:Jessom/infozx_api.git master

cd -