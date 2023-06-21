# git add and commit
gac() {
  git add -A
  git commit -m $1
}

# git add, commit and push
gacp() {
  git add -A
  git commit -m $1
  git push
}