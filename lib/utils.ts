import { toast } from "@/components/ui/use-toast";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function catchApiErrors(err: unknown) {
  if (err instanceof Error) {
    toast({
      title: "Error",
      description: err.message,
      variant: "destructive",
    });
  } else {
    toast({
      title: "Error",
      description: "Something went wrong, please try again later.",
      variant: "destructive",
    });
  }
}

export function generateSlug(title: string) {
  // Convert the title to lowercase and replace spaces with hyphens
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Remove any characters that are not alphanumeric or hyphens
  const cleanedSlug = slug.replace(/[^a-z0-9-]/g, "");

  return cleanedSlug;
}

// Deprecated
export function highlightTextWithXPath(htmlContent: string, xpath: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const xpathResult = doc.evaluate(
    xpath,
    doc,
    null,
    XPathResult.ANY_TYPE,
    null
  );
  let node = xpathResult.iterateNext();

  while (node) {
    const wrapper = document.createElement("pre");
    const code = document.createElement("code");
    code.className = "language-html";

    // Clone the node and wrap it
    const newNode = node.cloneNode(true);
    code.appendChild(newNode);
    wrapper.appendChild(code);

    // Replace the old node with the wrapper
    if (node.parentNode) {
      node.parentNode.replaceChild(wrapper, node);
    }

    node = xpathResult.iterateNext();
  }

  return doc.documentElement.innerHTML;
}
