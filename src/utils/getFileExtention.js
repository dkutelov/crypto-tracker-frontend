export function getFileExtension(filename) {
  return filename.slice(filename.lastIndexOf(('.' - 1) >>> 0) + 2);
}
// >>> 0 handles case .filename
