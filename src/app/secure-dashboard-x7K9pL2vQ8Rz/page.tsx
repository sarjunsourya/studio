"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAdminSession, adminLogout } from "@/lib/actions";
import { useFirestore, useCollection, useAuth, useUser } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { useMemoFirebase } from "@/firebase/provider";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  LogOut, 
  LayoutDashboard, 
  Clock, 
  Hash, 
  Euro,
  ChevronRight,
  Loader2,
  Calendar
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const firestore = useFirestore();
  const auth = useAuth();
  const { user } = useUser();

  // 1. Auth Guard & Firebase Session Sync
  useEffect(() => {
    async function verify() {
      const active = await checkAdminSession();
      if (!active) {
        router.push("/secure-dashboard-x7K9pL2vQ8Rz/login");
      } else {
        setIsAuthenticated(true);
        // Sync Firebase auth state if not already signed in
        if (auth && !user) {
          try {
            await signInAnonymously(auth);
          } catch (e) {
            console.error("Firebase background sync failed:", e);
          }
        }
      }
    }
    verify();
  }, [router, auth, user]);

  // 2. Fetch Orders
  const ordersQuery = useMemoFirebase(() => {
    if (!firestore || !isAuthenticated || !user) return null;
    return query(collection(firestore, "orders"), orderBy("orderDate", "desc"));
  }, [firestore, isAuthenticated, user]);

  const { data: orders, isLoading } = useCollection(ordersQuery);

  if (isAuthenticated === null || (isAuthenticated && !user) || isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-primary font-bold uppercase tracking-widest text-xs">Synchronizing Intelligence...</p>
      </div>
    );
  }

  const handleLogout = async () => {
    await adminLogout();
    router.push("/secure-dashboard-x7K9pL2vQ8Rz/login");
  };

  return (
    <div className="min-h-screen bg-[#051917] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0a2e2a]/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo className="scale-75" />
            <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
            <div className="hidden md:block">
              <h1 className="font-headline text-xl font-bold flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-primary" />
                COMMAND CENTER
              </h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Global Order Management</p>
            </div>
          </div>
          
          <Button 
            onClick={handleLogout}
            variant="ghost" 
            className="text-muted-foreground hover:text-white hover:bg-white/5 gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">TERMINATE SESSION</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Stats */}
            <div className="glass-card p-6 border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                    <Hash className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Total Orders</span>
                </div>
                <div className="text-4xl font-bold">{orders?.length || 0}</div>
            </div>
            <div className="glass-card p-6 border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-accent">
                    <Clock className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Active Orders</span>
                </div>
                <div className="text-4xl font-bold">
                    {orders?.filter(o => o.status === 'Pending').length || 0}
                </div>
            </div>
             <div className="glass-card p-6 border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                    <Euro className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Total Revenue</span>
                </div>
                <div className="text-4xl font-bold">
                    €{orders?.reduce((acc, curr) => acc + (curr.totalAmount || 0), 0).toFixed(2)}
                </div>
            </div>
            <div className="glass-card p-6 border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Last Update</span>
                </div>
                <div className="text-sm font-medium text-white/60">
                    {orders?.[0] ? format(new Date(orders[0].orderDate), 'PPpp') : 'No data'}
                </div>
            </div>
        </div>

        <div className="glass-card overflow-hidden border-white/5">
          <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="font-headline text-2xl font-bold tracking-tight">Recent Orders</h2>
            <div className="flex gap-2">
                <Badge className="bg-primary/20 text-primary border-none">1-9 DIGITS ONLY</Badge>
                <Badge variant="outline" className="border-white/10 text-white/40">REAL-TIME SYNC</Badge>
            </div>
          </div>
          
          <ScrollArea className="h-[600px]">
            <Table>
              <TableHeader className="bg-white/5 sticky top-0 z-10">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="w-[120px] text-primary uppercase tracking-widest text-[10px] font-bold">Order #</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[10px] font-bold">Customer</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[10px] font-bold">Est. Completion</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[10px] font-bold">Total</TableHead>
                  <TableHead className="text-primary uppercase tracking-widest text-[10px] font-bold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow key={order.id} className="border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <TableCell className="font-mono text-lg font-bold text-white tracking-widest py-6">
                      {order.orderNumber}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-white">{order.customerName}</span>
                        <span className="text-xs text-muted-foreground">{order.customerEmail}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="h-3 w-3 text-primary" />
                        <span className="text-sm font-medium">
                          {format(new Date(order.estimatedCompletionTime), 'p')}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-lg font-bold">
                      €{order.totalAmount.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-background rounded-full">
                        DETAILS <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {orders?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-20 text-muted-foreground uppercase tracking-widest text-xs">
                      No order intelligence gathered yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </main>

      <footer className="py-10 border-t border-white/5 text-center">
         <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.3em]">
            Internal System • Property of The Divine Kitchen • Protected by TDK-Auth
         </p>
      </footer>
    </div>
  );
}