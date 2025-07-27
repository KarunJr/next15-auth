"use client";

import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
import { admin } from "../../../../actions/admin";
const AdminPage = () => {

    const onServerActionClick = ()=>{
        admin().then((data)=>{
            if(data.success){
                toast.success(data.success)
            }
            if(data.error){
                toast.error(data.error)
            }
        })
    }
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        response.text().then((data) => {
          toast.success(data)
        });
      }
      if (response.status === 403) {
        response.text().then((data) => {
          toast.error(data)
        });
      }
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to view this content!" />
        </RoleGate>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick} className="cursor-pointer">
            Click to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick} className="cursor-pointer">Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
