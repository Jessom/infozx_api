#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 编译文档
vuepress build docs
# npm run docs:build

# 编译项目
npm run build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'watasi.cn' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@gitee.com:watasi/infozx_api.git master

# 提交码云
git push -u origin master

# 提交github
git push -u github master

cd -