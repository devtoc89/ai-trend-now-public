import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import type { ImgHTMLAttributes } from "react";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  seed: string;
  size?: number;
}

function Avatar({ seed = "John Doe", size = 32, ...rest }: AvatarProps) {
  const avatar = createAvatar(lorelei, {
    seed,
    size,
    radius: 100,
    // ... other options
  });
  return <img {...rest} height={size} width={size} src={avatar.toDataUri()} alt={rest.alt ?? "Avatar"} />;
}

export default Avatar;
