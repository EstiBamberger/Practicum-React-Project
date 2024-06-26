USE [master]
GO
/****** Object:  Database [EMEighth]    Script Date: 14/04/2024 04:04:51 ******/
CREATE DATABASE [EMEighth]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'EMEighth', FILENAME = N'C:\Users\USER\EMEighth.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'EMEighth_log', FILENAME = N'C:\Users\USER\EMEighth_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [EMEighth] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EMEighth].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EMEighth] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EMEighth] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EMEighth] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EMEighth] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EMEighth] SET ARITHABORT OFF 
GO
ALTER DATABASE [EMEighth] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [EMEighth] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EMEighth] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EMEighth] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EMEighth] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EMEighth] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EMEighth] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EMEighth] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EMEighth] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EMEighth] SET  ENABLE_BROKER 
GO
ALTER DATABASE [EMEighth] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EMEighth] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EMEighth] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EMEighth] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EMEighth] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EMEighth] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [EMEighth] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EMEighth] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [EMEighth] SET  MULTI_USER 
GO
ALTER DATABASE [EMEighth] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EMEighth] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EMEighth] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EMEighth] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [EMEighth] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [EMEighth] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [EMEighth] SET QUERY_STORE = OFF
GO
USE [EMEighth]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 14/04/2024 04:04:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 14/04/2024 04:04:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 14/04/2024 04:04:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[TZ] [nvarchar](max) NOT NULL,
	[DateOfStartingWork] [datetime2](7) NOT NULL,
	[DateOfBirth] [datetime2](7) NOT NULL,
	[Gender] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeJobs]    Script Date: 14/04/2024 04:04:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeJobs](
	[JobPositionId] [int] IDENTITY(1,1) NOT NULL,
	[JobPositionName] [nvarchar](max) NOT NULL,
	[IsManagerial] [bit] NOT NULL,
	[DateStartRole] [datetime2](7) NOT NULL,
	[CustomerEmployeeId] [int] NULL,
 CONSTRAINT [PK_EmployeeJobs] PRIMARY KEY CLUSTERED 
(
	[JobPositionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Jobs]    Script Date: 14/04/2024 04:04:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Jobs](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Jobs] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240405134912_sixth', N'6.0.25')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240406174928_seventh', N'6.0.25')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240406204756_eighth', N'6.0.25')
GO
SET IDENTITY_INSERT [dbo].[Admin] ON 

INSERT [dbo].[Admin] ([Id], [Name], [Password]) VALUES (1, N'admin', N'1')
SET IDENTITY_INSERT [dbo].[Admin] OFF
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 

INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (13, N'Adar', N'Baron', N'123456789', CAST(N'2024-04-13T00:00:00.0000000' AS DateTime2), CAST(N'2024-04-13T00:00:00.0000000' AS DateTime2), 2, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (14, N'Ron', N'Shafer', N'123456788', CAST(N'2024-04-13T20:50:01.8050000' AS DateTime2), CAST(N'2024-04-13T20:50:01.8050000' AS DateTime2), 0, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (15, N'Moshe', N'Alon', N'123456787', CAST(N'2024-04-13T20:50:01.8050000' AS DateTime2), CAST(N'2024-04-13T20:50:01.8050000' AS DateTime2), 0, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (16, N'Dan', N'Con', N'121212458', CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 2, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (17, N'Ben', N'Gidon', N'528596854', CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 0, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (18, N'Shmuel', N'Salomon', N'254565987', CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 0, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (19, N'Pinchas', N'Levin', N'986532125', CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 0, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (20, N'string', N'string', N'string', CAST(N'2024-04-13T21:44:10.3000000' AS DateTime2), CAST(N'2024-04-13T21:44:10.3000000' AS DateTime2), 0, 0)
INSERT [dbo].[Customers] ([EmployeeId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [IsDeleted]) VALUES (21, N'Yoni', N'Levin', N'859674854', CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 0, 0)
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[EmployeeJobs] ON 

INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (58, N'string', 1, CAST(N'2024-04-13T20:50:01.8050000' AS DateTime2), 14)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (59, N'string', 1, CAST(N'2023-04-13T20:50:01.8050000' AS DateTime2), 15)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (60, N'Front end Developer
', 0, CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 16)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (61, N'Systems Analyst', 0, CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 17)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (62, N'book keeper', 1, CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 18)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (63, N'User experience designer
', 1, CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 19)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (64, N'string', 1, CAST(N'2024-04-13T21:44:10.3000000' AS DateTime2), 20)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (65, N'book keeper', 1, CAST(N'2024-04-13T00:00:00.0000000' AS DateTime2), 13)
INSERT [dbo].[EmployeeJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerEmployeeId]) VALUES (66, N'User experience designer
', 0, CAST(N'2024-04-14T00:00:00.0000000' AS DateTime2), 21)
SET IDENTITY_INSERT [dbo].[EmployeeJobs] OFF
GO
SET IDENTITY_INSERT [dbo].[Jobs] ON 

INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (1, N'Software Engineer')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (3, N'Software Architect')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (4, N'Systems Analyst')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (5, N'Data science')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (6, N'System Administrator
')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (7, N'Front end Developer
')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (8, N'User experience designer
')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (13, N'book keeper')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (31, N'worker')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (33, N'Engineer')
SET IDENTITY_INSERT [dbo].[Jobs] OFF
GO
/****** Object:  Index [IX_EmployeeJobs_CustomerEmployeeId]    Script Date: 14/04/2024 04:04:51 ******/
CREATE NONCLUSTERED INDEX [IX_EmployeeJobs_CustomerEmployeeId] ON [dbo].[EmployeeJobs]
(
	[CustomerEmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmployeeJobs]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeJobs_Customers_CustomerEmployeeId] FOREIGN KEY([CustomerEmployeeId])
REFERENCES [dbo].[Customers] ([EmployeeId])
GO
ALTER TABLE [dbo].[EmployeeJobs] CHECK CONSTRAINT [FK_EmployeeJobs_Customers_CustomerEmployeeId]
GO
USE [master]
GO
ALTER DATABASE [EMEighth] SET  READ_WRITE 
GO
