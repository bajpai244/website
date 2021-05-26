import { Flex, Text } from "theme-ui";
import { social_data } from "./header";

export default () => (
  <Flex
    as={"header"}
    sx={{
      alignItems: "center",
      pt: 3,
      width: "100vw",
      flexDirection: "column",
      pb: [3],
      mt: [5],
    }}
  >
    <img src={"icons/logo.png"} sx={{ width: 100 }} />
    <Flex sx={{ flex: 1, justifyContent: "flex-end", mt: [4] }}>
      {social_data.map(({ path, link, width, height }) => (
        <img
          src={path}
          key={path}
          onClick={() => {
            window.open(link, "_blank");
          }}
          sx={{
            width: (width ? width : 20) * 0.8,
            height: (height ? height : 20) * 0.8,
            mx: [2],
            cursor: "pointer",
            transition: "0.2s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      ))}
    </Flex>
    <Text sx={{ color: "input", mt: [5], fontSize: [1] }}>
      © Copyright 2021. All rights reserved.
    </Text>
    <Text sx={{ color: "input", mt: [5], fontSize: [1], mt: [1], pt: [0] }}>
      ONFLEEKERS TECHNOLOGIES PRIVATE LIMITED
    </Text>
  </Flex>
);
