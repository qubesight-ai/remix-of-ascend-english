export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      conversation_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          pronunciation_score: number | null
          role: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          pronunciation_score?: number | null
          role: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          pronunciation_score?: number | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          avg_pronunciation_score: number | null
          ended_at: string | null
          id: string
          message_count: number | null
          scenario_id: string
          scenario_title: string
          started_at: string
          user_id: string
        }
        Insert: {
          avg_pronunciation_score?: number | null
          ended_at?: string | null
          id?: string
          message_count?: number | null
          scenario_id: string
          scenario_title: string
          started_at?: string
          user_id: string
        }
        Update: {
          avg_pronunciation_score?: number | null
          ended_at?: string | null
          id?: string
          message_count?: number | null
          scenario_id?: string
          scenario_title?: string
          started_at?: string
          user_id?: string
        }
        Relationships: []
      }
      exercise_completions: {
        Row: {
          completed_subskills: number | null
          correct_answers: number
          created_at: string
          curriculum_level_percent: number | null
          curriculum_overall_percent: number | null
          exercise_title: string
          exercise_type: string
          id: string
          level: string | null
          score: number
          student_email: string | null
          student_name: string | null
          total_questions: number
          total_subskills: number | null
          user_id: string
        }
        Insert: {
          completed_subskills?: number | null
          correct_answers?: number
          created_at?: string
          curriculum_level_percent?: number | null
          curriculum_overall_percent?: number | null
          exercise_title: string
          exercise_type: string
          id?: string
          level?: string | null
          score?: number
          student_email?: string | null
          student_name?: string | null
          total_questions?: number
          total_subskills?: number | null
          user_id: string
        }
        Update: {
          completed_subskills?: number | null
          correct_answers?: number
          created_at?: string
          curriculum_level_percent?: number | null
          curriculum_overall_percent?: number | null
          exercise_title?: string
          exercise_type?: string
          id?: string
          level?: string | null
          score?: number
          student_email?: string | null
          student_name?: string | null
          total_questions?: number
          total_subskills?: number | null
          user_id?: string
        }
        Relationships: []
      }
      learning_errors: {
        Row: {
          conversation_id: string | null
          correct_response: string
          created_at: string
          error_type: string
          id: string
          level: string
          phase: string
          question_text: string
          recommendation: string | null
          user_id: string
          user_response: string
        }
        Insert: {
          conversation_id?: string | null
          correct_response: string
          created_at?: string
          error_type: string
          id?: string
          level: string
          phase: string
          question_text: string
          recommendation?: string | null
          user_id: string
          user_response: string
        }
        Update: {
          conversation_id?: string | null
          correct_response?: string
          created_at?: string
          error_type?: string
          id?: string
          level?: string
          phase?: string
          question_text?: string
          recommendation?: string | null
          user_id?: string
          user_response?: string
        }
        Relationships: [
          {
            foreignKeyName: "learning_errors_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          current_level: string | null
          display_name: string | null
          email: string | null
          id: string
          is_approved: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_level?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          is_approved?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_level?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          is_approved?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_placement_exams: {
        Row: {
          answers: Json | null
          assigned_level: string
          completed_at: string
          created_at: string
          id: string
          score: number
          total_questions: number
          user_id: string
        }
        Insert: {
          answers?: Json | null
          assigned_level: string
          completed_at?: string
          created_at?: string
          id?: string
          score: number
          total_questions: number
          user_id: string
        }
        Update: {
          answers?: Json | null
          assigned_level?: string
          completed_at?: string
          created_at?: string
          id?: string
          score?: number
          total_questions?: number
          user_id?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          best_streak: number
          created_at: string
          current_streak: number
          goal_minutes: number
          id: string
          last_active_date: string | null
          today_minutes: number
          total_exercises_attempted: number
          total_exercises_correct: number
          total_lessons_completed: number
          updated_at: string
          user_id: string
          weekly_minutes: Json
          words_learned: number
        }
        Insert: {
          best_streak?: number
          created_at?: string
          current_streak?: number
          goal_minutes?: number
          id?: string
          last_active_date?: string | null
          today_minutes?: number
          total_exercises_attempted?: number
          total_exercises_correct?: number
          total_lessons_completed?: number
          updated_at?: string
          user_id: string
          weekly_minutes?: Json
          words_learned?: number
        }
        Update: {
          best_streak?: number
          created_at?: string
          current_streak?: number
          goal_minutes?: number
          id?: string
          last_active_date?: string | null
          today_minutes?: number
          total_exercises_attempted?: number
          total_exercises_correct?: number
          total_lessons_completed?: number
          updated_at?: string
          user_id?: string
          weekly_minutes?: Json
          words_learned?: number
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          created_at: string
          device_info: string | null
          id: string
          last_active_at: string
          session_token: string
          user_id: string
        }
        Insert: {
          created_at?: string
          device_info?: string | null
          id?: string
          last_active_at?: string
          session_token: string
          user_id: string
        }
        Update: {
          created_at?: string
          device_info?: string | null
          id?: string
          last_active_at?: string
          session_token?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_demo_user: { Args: { _user_id: string }; Returns: boolean }
      is_user_approved: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
