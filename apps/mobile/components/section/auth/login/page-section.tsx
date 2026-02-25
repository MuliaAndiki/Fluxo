import { useState } from "react";
import { ScrollView, View } from "react-native";

import { Text } from "@/components/ui/text";
import { useTheme } from "@/core/providers/theme.provinder";
import { useAlert } from "@/hooks/useAlert/costum-alert";

export default function LoginPage() {
  return (
    <ScrollView className="bg-background">
      <View className="w-full flex items-center">
        <Text className="">Initial</Text>
      </View>
    </ScrollView>
  );
}
