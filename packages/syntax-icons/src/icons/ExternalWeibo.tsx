import { type ComponentProps, forwardRef } from "react";
import Icon from "../../../syntax-core/src/Icon/Icon";
const ExternalWeibo = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => {
  const path =
    "M15.83 12.993c-.258-.08-.437-.134-.3-.48.294-.754.325-1.403.006-1.867-.598-.868-2.232-.823-4.106-.022 0 0-.59.262-.438-.215.287-.943.244-1.732-.205-2.188-1.017-1.036-4.206.56-6.041 2.4C2.91 12.46 2 13.754 2 15.88c0 3.1 3.904 5.172 7.724 5.172 5.008 0 8.338-3.15 8.338-5.5 0-1.421-1.176-2.227-2.232-2.561Zm-9.214 3.376c-.229-1.136.692-2.28 2.055-2.554 1.365-.275 2.656.425 2.884 1.56.228 1.137-.692 2.28-2.055 2.555-1.365.275-2.656-.424-2.884-1.56ZM22 10.027a6.297 6.297 0 0 0-6.299-6.295.734.734 0 0 0 0 1.468 4.83 4.83 0 0 1 4.83 4.83.734.734 0 1 0 1.469 0zm-2.92-.107a4.21 4.21 0 0 0-3.268-3.268.736.736 0 0 0-.296 1.44 2.74 2.74 0 0 1 2.123 2.123.736.736 0 0 0 1.441-.295";
  return <Icon ref={ref} path={path} color={color} size={size} />;
});
ExternalWeibo.displayName = "ExternalWeibo";
export default ExternalWeibo;