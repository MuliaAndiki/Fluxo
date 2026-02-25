import { Link } from "expo-router";
import {
  ArrowRight,
  Home as HomeIcon,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react-native";
import { ScrollView, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

export default function SectionHomePage() {
  return (
    <ScrollView className="bg-background ">
      <View className="p-6 space-y-6">
        <View className="items-center py-8">
          <View className="w-20 h-20 rounded-full items-center justify-center mb-4 bg-primary/10">
            <Icon as={HomeIcon} size={40} className="text-primary" />
          </View>
          <Text className="text-4xl font-bold text-center mb-2 ">Welcome</Text>
          <Text className="text-lg text-center text-muted-foreground/60 mb-6">
            Build amazing apps with Expo & React Native
          </Text>

          <Button className="w-full max-w-sm">
            <Link href={"/(auth)/login/page"}>
              <Text className="text-primary-foreground font-semibold text-base">
                Get Started
              </Text>
            </Link>
            <Icon
              as={ArrowRight}
              size={20}
              className="text-primary-foreground ml-2"
            />
          </Button>
        </View>

        <View className="gap-2">
          <Text className="text-2xl font-bold mb-2">Features</Text>

          <Card>
            <CardContent className="pt-6">
              <View className="flex-row items-start">
                <View className="w-12 h-12 rounded-full items-center justify-center bg-primary/10">
                  <Icon as={Zap} size={24} className="text-primary" />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-lg font-semibold mb-1">
                    Lightning Fast
                  </Text>
                  <Text className="text-muted-foreground/60">
                    Built with performance in mind. Experience smooth and
                    responsive UI.
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <View className="flex-row items-start">
                <View className="w-12 h-12 rounded-full items-center justify-center bg-primary/10">
                  <Icon as={Shield} size={24} className="text-primary" />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-lg font-semibold mb-1">
                    Secure & Private
                  </Text>
                  <Text className="text-muted-foreground/60">
                    Your data is protected with industry-standard security
                    measures.
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <View className="flex-row items-start">
                <View className="w-12 h-12 rounded-full items-center justify-center bg-primary/10">
                  <Icon as={Smartphone} size={24} className="text-primary" />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-lg font-semibold mb-1">
                    Cross-Platform
                  </Text>
                  <Text className="text-muted-foreground/60">
                    Works seamlessly on iOS, Android, and Web platforms.
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
