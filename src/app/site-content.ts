export const whatsappNumber = "2347018727534";
export const generalMessage =
  "Hello Amicable Tech, I would like to enquire about your phone technical support. I can share my phone model, the issue, and any relevant service details. Please let me know what information you need.";

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
