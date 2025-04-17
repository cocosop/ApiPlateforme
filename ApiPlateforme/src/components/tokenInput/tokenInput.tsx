import { useRef } from "react";
import { TextField, Box } from "@mui/material";

const TokenInput = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, val: string) => {
        if (/^\d?$/.test(val)) {
            const newToken = value.split('');
            newToken[index] = val;
            onChange(newToken.join(''));

            if (val && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !value[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 3 }}>
                {[...Array(6)].map((_, index) => (
                    <TextField
                        key={index}
                        inputRef={(el) => (inputRefs.current[index] = el)}
                        value={value[index] || ''}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        inputProps={{
                            maxLength: 1,
                            inputMode: 'numeric',
                            style: {
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                width: '2.5rem',
                                height: '3.5rem'
                            }
                        }}
                    />
                ))}
            </Box>
        </div>
    );
}

export default TokenInput;