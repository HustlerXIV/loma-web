import { Divider, Typography, Box } from "@mui/material";

interface DividerWithTextProps {
  text: string;
}

export default function DividerWithText({ text }: DividerWithTextProps) {
  return (
    <Box my={3}>
      <Divider>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontWeight: 500 }}
        >
          {text}
        </Typography>
      </Divider>
    </Box>
  );
}
