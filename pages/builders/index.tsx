import Container from "@/components/UIComponents/Container";
import { SectionContainer } from "@/components/UIComponents/Container/SectionContainer";
import Headline from "@/components/UIComponents/Typography/Headline";
import Paragraph from "@/components/UIComponents/Typography/Paragraph";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import Button from "@/components/UIComponents/Button";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/UIComponents/Dropdown";
import { useState } from "react";

const Builders = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    return (
        <Container>
            <Container className="bg-gray-900">
                <SectionContainer>
                    <Container className="text-center flex flex-col items-center justify-start gap-4">
                        <Headline className="font-semibold text-white text-6xl flex flex-row items-center justify-center gap-1">
                            <span>{"Past Builders"}</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="solid" type="button" size="large"
                                        className="text-6xl"
                                    >
                                        {new Date().getFullYear()}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>{"Select Year/Cohort"}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup value={year.toString()} onValueChange={setYear}>
                                        <DropdownMenuRadioItem value="2023">2023</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </Headline>
                        <Paragraph>
                            {"Meet the builders who built amazing projects during Build Program"}
                        </Paragraph>
                    </Container>
                </SectionContainer>
            </Container>
            <SectionContainer className="past-builders-content-wrapper">

            </SectionContainer>
        </Container>
    )
};

export default Builders;


{/* <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
</TabsList>
<TabsContent value="account">
    <p className="text-sm text-slate-500 dark:text-slate-400">
    Make changes to your account here. Click save when you&apos;re done.
    </p>
</TabsContent>
<TabsContent value="password">
    <p className="text-sm text-slate-500 dark:text-slate-400">
    Change your password here. After saving, you&apos;ll be logged out.
    </p>
</TabsContent> */}