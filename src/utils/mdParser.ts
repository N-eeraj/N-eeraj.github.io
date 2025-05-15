export function parseMdLinks(content: string) {
  return content
    .replaceAll(
      /\[(.*?)\]\((.*?)\)/g,
      `<a href="$2" target="_blank" class="font-medium hover:text-primary hover:underline">$1</a>`
    )
}
