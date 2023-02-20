export function gitLink(
    repoName,
    content,
    folder = null,
    username = "md-palash-hossain",
    brunch = "main"
  ) {
    const link = `https://raw.githubusercontent.com/${username}/${repoName}/${brunch}/${folder?`${folder}/`:''}${content}`;
    return link;
  }