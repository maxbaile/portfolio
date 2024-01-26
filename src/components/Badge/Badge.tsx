import { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./Badge.module.sass";

interface BadgeProps {
  className?: string;
  label?: string;
  src: string;
}

const Badge: FC<BadgeProps> = (props) => {
  const { className, label = "", src } = props;

  const letters = label.split("");

  const radius = 200,
    padding = 300,
    angle = 360 / (2 * Math.PI),
    point = Math.PI / letters.length,
    step = (2 * Math.PI) / letters.length;

  return (
    <div className={classNames("relative", className)}>
      {letters && letters.length ? (
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90"
          aria-hidden="true"
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className="absolute text-xs font-bold"
              style={{
                transform: `translate(-50%, -50%) rotate(calc(360deg / ${letters.length} * ${index})) translateY(calc(14 * -1ch))`,
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      ) : null}
      <div className="relative h-48 w-48 overflow-hidden rounded-full">
        <Image
          src={src}
          alt={label ? label : ""}
          width={200}
          height={200}
          className="absolute object-cover select-none"
        />
      </div>
    </div>
  );
};

export default Badge;
